import CourseCreateForm from '@/components/course/create/CourseCreateForm'

type PageProps = {
  params: Promise<{ step: string }>
}

export default async function Page({ params }: PageProps) {
  const { step } = await params
  const stepNumber = parseInt(step, 10)

  return (
    <div>
      <CourseCreateForm inputStep={stepNumber} />
    </div>
  )
}
