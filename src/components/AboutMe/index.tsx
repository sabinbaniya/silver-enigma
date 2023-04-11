import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

interface Props {}
const AboutMeSection = ({}: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="About me" centered />
          <Card>
            <div className="space-y-1 p-8 font-medium">
              <p>
                A self-driven, versatile, reliable, diligent individual who is
                calm and cheerful with a team-minded approach to work and
                getting things done.
              </p>
              <p className="line-clamp-3">
                A student who is passionate and with a keen eye for design Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                distinctio minus cumque, similique deleniti officia itaque
                quidem at laudantium consequuntur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugiat, perspiciatis. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Quos iusto est
                suscipit eveniet soluta temporibus id quo illo voluptatibus
                consequatur!
              </p>
              <div>
                <button className="mt-4 rounded-lg bg-gray-200 p-2 font-semibold text-gray-800 transition-all">
                  Read More
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};
export default AboutMeSection;
