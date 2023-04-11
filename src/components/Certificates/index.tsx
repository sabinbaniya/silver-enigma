import Grid from "../common/Grid";
import SectionHeading from "../common/SectionHeading";
import CertificatesCard from "./CertificatesCard";

interface Props {}

const CertificatesSection = ({}: Props) => {
  return (
    <>
      <section>
        <div className="my-8">
          <SectionHeading heading="Certificates" action="Add new certificate" />
          <Grid>
            <CertificatesCard
              title="Advanced theoretical Javascript"
              src="/assets/icons/javascript.svg"
            />
            <CertificatesCard title="HTML/CSS" src="/assets/icons/html-5.svg" />
            <CertificatesCard
              title="Build a decentralized to-do application"
              src="/assets/icons/achievments.svg"
            />
            <CertificatesCard title="React JS" src="/assets/icons/react.svg" />
          </Grid>
        </div>
      </section>
    </>
  );
};
export default CertificatesSection;
