type item = {
  img: string | undefined;
  title: string;
  description: string;
};

type prop = {
  item: item;
};

const ServiceCard = ({ item }: prop) => {
  return (
    <div className="border border-[#DCDCDC] rounded-2xl bg-white px-4 py-5">
      <img src={item.img} alt="Trust Icon" className="h-[61px]" />

      <h1 className="text-[#040D11] font-medium text-2xl sm:text-3xl  pt-5">
        {item.title}
      </h1>

      <p className="text-[#4F5658]  pt-2">{item.description}</p>
    </div>
  );
};

export default ServiceCard;
