import ContentContainer from "@/components/course/ContentContainer"

type PageProps = {
    params: Promise<{ course_name: string }>
}

export default async function page({ params }: PageProps) {
    const { course_name } = await params

    return (
        <div className="px-[20px] lg:px-[90px] xl:px-[132px]">
            <ContentContainer course_name={course_name} />
        </div>
    )
}
