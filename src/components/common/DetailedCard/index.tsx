import Image from "next/image";
import Card from "../Card";

interface Props {
  src: string;
  title: string;
  subtitle: {
    first: string;
    second?: string;
  };
  duration: string;
  description?: string;
  responsiblities?: string[];
}

const DetailedCard = ({
  src,
  description,
  duration,
  subtitle: { first, second },
  title,
  responsiblities,
}: Props) => {
  return (
    <>
      <Card>
        <div className="flex items-start space-x-4 p-4">
          <Image
            height={32}
            width={32}
            className="h-[32px] w-[32px]"
            src={src}
            alt=""
          />
          <div className="w-full">
            <p className="text-lg font-semibold">{title}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 ">
                <span>{first}</span>
                {second && (
                  <>
                    <span className="h-1 w-1 rounded-lg bg-gray-600" />
                    <span>{second}</span>
                  </>
                )}
              </div>
              <span className="text-lg font-semibold">{duration}</span>
            </div>
            {description && <p className="pt-4 text-gray-600">{description}</p>}
            {responsiblities && (
              <div>
                <p className="pt-4 font-semibold">Job responsiblities:</p>
                <div>
                  {responsiblities.map((el) => {
                    return (
                      <div className="flex items-center space-x-2" key={el}>
                        <span className="h-2 w-2 rotate-45 rounded-sm bg-indigo-600" />
                        <p className="text-gray-600">{el}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};
export default DetailedCard;
