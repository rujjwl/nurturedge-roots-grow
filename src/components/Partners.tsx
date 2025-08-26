const partners = [
  "Vikas Makwana", "Prateeksha Solanki", "Neeraj Kumar", "Dhiren Bhankharia",
  "Mahesh Dave", "Swati Patel", "Sneha Shukal", "Nikunj Parmar",
  "Renuka Mehta", "Sanjay Patel", "Rujwal Prasad", "Ranvindra Rathod",
  "Vaishali Gupta", "Kamlesh Vora"
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">
            Meet Our Partners
          </h2>
          <p className="font-opensans text-muted-foreground">
            A diverse network of changemakers
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
            >
              <p className="font-opensans text-sm text-foreground font-medium">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;