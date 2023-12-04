import { CardList, Section, WrapPage } from 'components';

const CatalogPage = () => {
  return (
    <WrapPage>
      {/* <Section title="Filter"></Section> */}
      <Section title="">
        <CardList />
      </Section>
    </WrapPage>
  );
};
export default CatalogPage;