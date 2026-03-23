import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Design Styles</h1>
        <p className="text-muted-foreground mb-6">
          A catalog of every known UI design aesthetic.
        </p>
        <Link
          href="/design-styles"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View All Styles
        </Link>
      </div>
    </div>
  )
}
