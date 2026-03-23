import { designStyles } from "./registry";

export default function DesignStylesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2">UI Design Styles</h1>
      <p className="text-neutral-400 text-center mb-12 max-w-xl mx-auto">
        A visual showcase of {designStyles.length} design aesthetics. Each card
        is styled in the aesthetic it represents.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {designStyles.map((style) => (
          <style.component key={style.slug} />
        ))}
      </div>

      <p className="text-neutral-500 text-center mt-12 text-sm pb-8">
        {designStyles.length} design styles — each card rendered in its own
        aesthetic
      </p>
    </div>
  );
}
