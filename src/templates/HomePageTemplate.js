const HomePageTemplate = ({pageData}) => {
  return (
    <section id="homepage">
      <div id="homepage-title">
        {pageData.title.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
      <p>{pageData.body}</p>
    </section>
  );
};

export default HomePageTemplate;
