import { Category } from "@/lib/categories"
import { Badge } from "./ui/badge"
import Link from "next/link"

interface CategoryBadgeProps {
  category: Category
  showLink?: boolean
}

export function CategoryBadge({ category, showLink = true }: CategoryBadgeProps) {
  const BadgeComponent = showLink ? Link : "div"
  
  return (
    <BadgeComponent
      href={showLink ? `/blog?category=${category.id}` : "#"}
      className={`${category.color} text-white hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold`}
    >
      {category.label}
    </BadgeComponent>
  )
}