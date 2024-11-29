import SingleProductContainer from "@/components/productComponent/SingleProductContainer";
import ReusableBanner from "@/components/reusableComponents/ReusableBanner";

export default async function Page({ params,}: { params: Promise<{ id: string }>;}) {
  const id = (await params).id;



  return (
    <div>
      <ReusableBanner />
      <SingleProductContainer id={id} />
    </div>
  );
}
