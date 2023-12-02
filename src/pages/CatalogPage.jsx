import { Section, ContactForm, ContactList, Filter } from 'components';

const CatalogPage = () => {
  return (
    <main>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </main>
  );
};
export default CatalogPage;
