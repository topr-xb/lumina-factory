"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { ProductionBatch, ImageNode } from "@/types";
import {
  Layers,
  RotateCcw,
  X,
  ImageIcon,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowLeft,
} from "lucide-react";

export default function CanvasPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState<(ProductionBatch & { nodes?: ImageNode[] }) | null>(null);

  const fetchBatches = useCallback(async () => {
    const res = await fetch("/api/batches");
    const json = await res.json();
    if (!json.success) return;

    const batches: ProductionBatch[] = json.data;

    const newNodes: Node[] = batches.map((batch) => ({
      id: batch.id,
      position: batch.canvas_position as { x: number; y: number },
      data: { batch },
      type: "batchNode",
    }));

    const newEdges: Edge[] = batches
      .filter((_, i) => i > 0)
      .map((batch, index) => ({
        id: `e${batches[index].id}-${batch.id}`,
        source: batches[index].id,
        target: batch.id,
      }));

    setNodes(newNodes);
    setEdges(newEdges);

    const batchId = searchParams.get("batch");
    if (batchId) {
      const selected = batches.find((b) => b.id === batchId);
      if (selected) {
        const detailRes = await fetch(`/api/batches/${selected.id}`);
        const detailJson = await detailRes.json();
        if (detailJson.success) setSelectedNode(detailJson.data);
      }
    }
  }, [setNodes, setEdges, searchParams]);

  useEffect(() => {
    fetchBatches();
    const interval = setInterval(fetchBatches, 5000);
    return () => clearInterval(interval);
  }, [fetchBatches]);

  const BatchNode = ({ data }: { data: { batch: ProductionBatch } }) => {
    const batch = data.batch;
    const progress = batch.total_images > 0
      ? Math.round((batch.successful_images / batch.total_images) * 100)
      : 0;

    return (
      <div
        className="min-w-[200px] cursor-pointer rounded-xl border border-white/[0.08] bg-[#141416] p-4 shadow-lg transition-all hover:border-amber-500/30 hover:shadow-amber-500/5"
        onClick={async () => {
          const res = await fetch(`/api/batches/${batch.id}`);
          const json = await res.json();
          if (json.success) setSelectedNode(json.data);
        }}
      >
        <p className="truncate font-semibold text-white">{batch.name}</p>
        <div className="mt-2 flex items-center gap-2">
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
          <span className="text-xs text-muted-foreground">
            {batch.successful_images}/{batch.total_images}
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-amber-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  const nodeTypes = { batchNode: BatchNode };

  const handleRegenerate = async () => {
    if (!selectedNode) return;
    const failedIds = selectedNode.nodes?.filter((n) => n.status === "failed").map((n) => n.id);
    if (!failedIds || failedIds.length === 0) return;

    await fetch(`/api/batches/${selectedNode.id}/regenerate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ node_ids: failedIds }),
    });

    const res = await fetch(`/api/batches/${selectedNode.id}`);
    const json = await res.json();
    if (json.success) setSelectedNode(json.data);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col" dir="rtl">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-heading-ar text-2xl font-bold text-white">المساحة اللانهائية</h1>
          <p className="text-sm text-muted-foreground">تصفح الدفعات بصرياً وتابع تقدمها</p>
        </div>
        <Link href="/workspace">
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
            <Layers className="ml-2 h-4 w-4" />
            وضع القائمة
          </Button>
        </Link>
      </div>

      <div className="flex flex-1 overflow-hidden rounded-2xl border border-white/[0.06] bg-card">
        {/* Canvas */}
        <div className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="rgba(255,255,255,0.05)" />
            <Controls className="bg-card border-white/[0.06]" />
            <MiniMap className="rounded-lg bg-card" maskColor="rgba(0,0,0,0.5)" nodeColor="#F59E0B" />
          </ReactFlow>
        </div>

        {/* Sidebar */}
        {selectedNode && (
          <Card className="w-96 rounded-none border-r border-white/[0.06] bg-[#0E0E10]">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-white">{selectedNode.name}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setSelectedNode(null)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <Separator className="bg-white/[0.06]" />
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <StatBox label="الإجمالي" value={selectedNode.total_images} />
                <StatBox label="النجاح" value={selectedNode.successful_images} color="text-emerald-500" />
                <StatBox label="الفشل" value={selectedNode.failed_images} color="text-destructive" />
                <StatBox label="التكلفة" value={`$${Number(selectedNode.total_cost).toFixed(2)}`} />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-white">الصور المولدة</p>
                <div className="max-h-[300px] space-y-2 overflow-y-auto pr-1">
                  {selectedNode.nodes?.map((node) => (
                    <div
                      key={node.id}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.03] p-2"
                    >
                      {node.generated_image_url ? (
                        <img
                          src={node.generated_image_url}
                          alt="generated"
                          className="h-14 w-14 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/[0.05]">
                          <ImageIcon className="h-5 w-5 text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {node.status === "success" && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />}
                          {node.status === "processing" && <Clock className="h-3.5 w-3.5 text-amber-500" />}
                          {node.status === "failed" && <AlertCircle className="h-3.5 w-3.5 text-destructive" />}
                          <span className="text-xs text-white capitalize">{node.status}</span>
                        </div>
                        {node.error_reason && (
                          <p className="mt-1 text-xs text-destructive truncate">{node.error_reason}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedNode.failed_images > 0 && (
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleRegenerate}>
                  <RotateCcw className="ml-2 h-4 w-4" />
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

function StatBox({ label, value, color = "text-white" }: { label: string; value: string | number; color?: string }) {
  return (
    <div className="rounded-lg bg-white/[0.03] p-3 text-center">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={`mt-1 text-lg font-bold ${color}`}>{value}</p>
    </div>
  );
}
