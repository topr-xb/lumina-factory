"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { ImageNode } from "@/types";
import { Search, ImageIcon } from "lucide-react";

type GalleryNode = ImageNode & { prompt?: string; batch_name?: string };

export default function GalleryPage() {
  const [nodes, setNodes] = useState<GalleryNode[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNodes() {
      const res = await fetch("/api/gallery");
      const json = await res.json();
      if (json.success) setNodes(json.data || []);
      setLoading(false);
    }
    fetchNodes();
  }, []);

  const filtered = nodes.filter((n) =>
    (n.prompt || (n.metadata?.prompt as string) || "").toLowerCase().includes(search.toLowerCase()) ||
    (n.batch_name || "").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center" dir="rtl">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <h1 className="font-heading-ar text-3xl font-bold text-white">معرض الصور</h1>
        <p className="text-muted-foreground">جميع الصور الناجحة في مكان واحد</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          className="border-white/10 bg-white/[0.03] pr-10 text-right text-white"
          placeholder="ابحث بالوصف أو اسم الدفعة..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((node) => (
            <Card key={node.id} className="overflow-hidden border-white/[0.06] bg-card">
              <div className="aspect-square bg-white/[0.03]">
                {node.generated_image_url ? (
                  <img
                    src={node.generated_image_url}
                    alt={node.prompt || ""}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <p className="line-clamp-2 text-sm text-white">
                  {node.prompt || (node.metadata?.prompt as string) || "بدون وصف"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{node.batch_name || "دفعة"}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-white/[0.06] bg-card">
          <CardContent className="py-16 text-center text-muted-foreground">
            لا توجد صور مطابقة. قم بإنشاء دفعة جديدة من مساحة العمل.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
