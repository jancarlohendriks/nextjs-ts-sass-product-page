import { Container } from "../components/Container";
import { Grid } from "../components/Grid";
import { Navigation } from "../components/Navigation";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Navigation />
      <Container>
        <Grid>{children}</Grid>
      </Container>
    </>
  );
};

export default DefaultLayout;
