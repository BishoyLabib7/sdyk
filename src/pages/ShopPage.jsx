import Section from "../feathers/shop/Section";
import useProviders from "../hooks/useProviders";

export default function ShopPage() {
  const { provider } = useProviders();
  return (
    <div className="w-[90%] mx-auto mt-20">
      {provider?.map(
        (provider) =>
          provider?.nameOfCompany && (
            <>
              <div className="flex lg:flex-row flex-col gap-5 mt-20">
                <img
                  src={provider.profilePicture}
                  alt=""
                  className="md:size-2/6 size-4/6 mx-auto"
                />
                <div className="flex flex-col gap-10 text-right mt-10">
                  <h2 className="text-2xl font-semibold">
                    {provider.nameOfCompany}
                  </h2>
                  <p className="leading-8">{provider.bio}</p>
                </div>
              </div>
              <div>
                <Section title={provider.title} products={provider.products} />
              </div>
            </>
          )
      )}
    </div>
  );
}
