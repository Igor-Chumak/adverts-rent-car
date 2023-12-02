import { ContainerPage } from 'components';

const HomePage = () => {
  return (
    <main>
      <ContainerPage>
        <h1
          style={{
            fontSize: '60px',
            textShadow: '2px 2px 4px #FFFF',
            marginTop: 'auto',
          }}
        >
          Welcome to Adverts rent a car
        </h1>
        <p
          style={{
            fontSize: '40px',
            textShadow: '1px 1px 2px #FFFF',
          }}
        >
          Working every day 24 / 7
        </p>
        <p style={{ fontSize: '24px', textShadow: '1px 1px 1px #FFFF' }}>
          Convenient, fast and comfortable. No mileage restrictions. CASCO
          insurance is included in the price.
        </p>
        <p style={{ marginTop: 'auto' }}>&#169; Igor Chumak</p>
      </ContainerPage>
    </main>
  );
};

export default HomePage;
