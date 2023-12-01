import { Section, ContactForm, ContactList, Filter } from 'components';

const ContactsPage = () => {
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
export default ContactsPage;
