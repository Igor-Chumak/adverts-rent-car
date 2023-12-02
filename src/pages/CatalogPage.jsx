import { CardList, Section } from 'components';

const CatalogPage = () => {
  return (
    <main>
      <Section title="Phonebook"></Section>
      <Section title="Adverts">
        <CardList />
      </Section>
    </main>
  );
};
export default CatalogPage;
