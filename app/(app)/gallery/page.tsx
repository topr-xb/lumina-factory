"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/page/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { ImageNode } from "@/types";
import { Search, ImageIcon, ZoomIn } from "lucide-react";

type GalleryNode = ImageNode & { prompt?: string; batch_name?: string };

export default function GalleryPage() {
  const [nodes, setNodes] = useState<GalleryNode[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<GalleryNode | null>(null);

  useEffect(() => {
    async function fetchNodes() {
      const res = await fetch("/api/gallery");
      const json = await res.json();
      if (json.success) setNodes(json.data || []);
      setLoading(false);
    }
    fetchNodes();
  }, []);

  const filtered = nodes.filter((n) => {
    const prompt = n.prompt || (n.metadata?.prompt as string) || "";
    return (
      prompt.toLowerCase().includes(search.toLowerCase()) ||
      (n.batch_name || "").toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader title="معرض الصور" subtitle="جميع الصور الناجحة في مكان واحد" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square animate-pulse rounded-xl bg-white/[0.03]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader title="معرض الصور" subtitle="جميع الصور الناجحة في مكان واحد">
        <div className="relative mt-4 max-w-md">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="border-white/10 bg-white/[0.03] pr-10 text-right text-white placeholder:text-muted-foreground"
            placeholder="ابحث بالوصف أو اسم الدفعة..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </PageHeader>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((node) => {
            const prompt = node.prompt || (node.metadata?.prompt as string) || "بدون وصف";
            return (
              <Card
                key={node.id}
                className="group cursor-pointer overflow-hidden border-white/[0.06] bg-card transition-all hover:border-amber-500/20"
                onClick={() => setSelected(node)}
              >
                <div className="relative aspect-square bg-white/[0.03]">
                  {node.generated_image_url ? (
                    <>
                      <img
                        src={node.generated_image_url}
                        alt={prompt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="line-clamp-2 text-sm text-white">{prompt}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="secondary" className="bg-white/5 text-xs text-muted-foreground">
                      {node.batch_name || "دفعة"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      ${Number(node.cost).toFixed(3)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="border-white/[0.06] bg-card">
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.03]">
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">لا توجد صور بعد</h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              قم بإنشاء دفعة جديدة من مساحة العمل لتبدأ بملء معرضك.
            </p>
          </CardContent>
        </Card>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] max-w-4xl overflow-auto rounded-2xl border border-white/[0.06] bg-card p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.generated_image_url || undefined}
              alt=""
              className="max-h-[70vh] w-full rounded-xl object-contain"
            />
            <div className="mt-4 px-2">
              <p className="text-white">
                {selected.prompt || (selected.metadata?.prompt as string) || "بدون وصف"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {selected.batch_name || "دفعة"} · ${Number(selected.cost).toFixed(3)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
