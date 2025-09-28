import ContactForm from "@/components/contact/ContactForm";
import Header from "@/components/contact/Header";

export default function page() {
  return (
    <div className="px-[20px] lg:px-[90px] xl:px-[132px]">
      <Header />
      <ContactForm />
    </div>
  )
}
