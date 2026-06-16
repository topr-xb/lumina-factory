"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProductionBatch, ImageNode } from "@/types";

export default function CanvasPage() {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState<(ProductionBatch & { nodes?: ImageNode[] }) | null>(null);

  const fetchBatches = useCallback(async () => {
    const res = await fetch("/api/batches");
    const json = await res.json();
    if (!json.success) return;

    const batches: ProductionBatch[] = json.data;

    const newNodes: Node[] = batches.map((batch, index) => ({
      id: batch.id,
      position: batch.canvas_position as { x: number; y: number },
      data: { batch },
      type: "batchNode",
    }));

    const newEdges: Edge[] = batches
      .filter((b, i) => i > 0)
      .map((batch, index) => ({
        id: `e${batches[index].id}-${batch.id}`,
        source: batches[index].id,
        target: batch.id,
      }));

    setNodes(newNodes);
    setEdges(newEdges);
  }, [setNodes, setEdges]);

  useEffect(() => {
    fetchBatches();
    const interval = setInterval(fetchBatches, 5000);
    return () => clearInterval(interval);
  }, [fetchBatches]);

  const BatchNode = ({ data }: { data: { batch: ProductionBatch } }) => {
    const batch = data.batch;
    return (
      <div
        className="min-w-[180px] cursor-pointer rounded-lg border bg-card p-3 shadow-sm hover:shadow-md transition-shadow"
        onClick={async () => {
          const res = await fetch(`/api/batches/${batch.id}`);
          const json = await res.json();
          if (json.success) setSelectedNode(json.data);
        }}
      >
        <p className="font-medium truncate">{batch.name}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <Badge
            variant={
              batch.status === "completed"
                ? "default"
                : batch.status === "processing"
                ? "secondary"
                : "destructive"
            }
            className="text-[10px]"
          >
            {batch.status}
          </Badge>
          <span>
            {batch.successful_images}/{batch.total_images}
          </span>
        </div>
      </div>
    );
  };

  const nodeTypes = { batchNode: BatchNode };

  return (
    <div className="flex h-screen flex-col" dir="rtl">
      <header className="border-b bg-background p-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">المساحة اللانهائية</h1>
          <p className="text-sm text-muted-foreground">انقر على أي دفعة للتفاصيل</p>
        </div>
        <div className="flex gap-2">
          <Link href="/workspace">
            <Button variant="outline">وضع القائمة</Button>
          </Link>
          <Link href="/workspace">
            <Button>فضاء العمل</Button>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>

        {selectedNode && (
          <Card className="w-96 border-l rounded-none overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{selectedNode.name}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setSelectedNode(null)}>
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded bg-muted p-2">
                  <p className="text-muted-foreground">الإجمالي</p>
                  <p className="font-bold">{selectedNode.total_images}</p>
                </div>
                <div className="rounded bg-muted p-2">
                  <p className="text-muted-foreground">النجاح</p>
                  <p className="font-bold">{selectedNode.successful_images}</p>
                </div>
                <div className="rounded bg-muted p-2">
                  <p className="text-muted-foreground">الفشل</p>
                  <p className="font-bold">{selectedNode.failed_images}</p>
                </div>
                <div className="rounded bg-muted p-2">
                  <p className="text-muted-foreground">التكلفة</p>
                  <p className="font-bold">${Number(selectedNode.total_cost).toFixed(4)}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">الصور</p>
                <div className="space-y-2">
                  {selectedNode.nodes?.map((node) => (
                    <div key={node.id} className="flex items-center gap-2 rounded border p-2">
                      {node.generated_image_url ? (
                        <img
                          src={node.generated_image_url}
                          alt="generated"
                          className="h-12 w-12 rounded object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded bg-muted" />
                      )}
                      <div className="flex-1 text-xs">
                        <Badge
                          variant={
                            node.status === "success"
                              ? "default"
                              : node.status === "processing"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {node.status}
                        </Badge>
                        {node.error_reason && (
                          <p className="mt-1 text-destructive truncate">{node.error_reason}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedNode.failed_images > 0 && (
                <Button
                  className="w-full"
                  onClick={async () => {
                    const failedIds = selectedNode.nodes
                      ?.filter((n) => n.status === "failed")
                      .map((n) => n.id);
                    if (!failedIds || failedIds.length === 0) return;

                    await fetch(`/api/batches/${selectedNode.id}/regenerate`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ node_ids: failedIds }),
                    });

                    router.refresh();
                  }}
                >
                  إعادة توليد الفاشلة
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
