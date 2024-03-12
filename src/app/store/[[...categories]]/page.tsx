"use client"
interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default function Category(props: CategoryProps) {
    const {categories} = props.params
    //throw new Error('BOM!');
    return (
        <h1>Dinamic category: {categories}</h1>
    )
}