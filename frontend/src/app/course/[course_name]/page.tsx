import ContentContainer from "@/components/course/ContentContainer"

type PageProps = {
    params: Promise<{ course_name: string }>
}

export default async function page({ params }: PageProps) {
    const { course_name } = await params

    return (
        <div>
            <ContentContainer course_name={course_name} />
        </div>
    )
}
