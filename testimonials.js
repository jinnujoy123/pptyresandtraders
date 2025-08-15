
const testimonials = [
    {
     
      image: "./images/IMG_20250320_170128.jpg",
    },
    {
      
      image: "./images/IMG_20250320_171925.jpg",
    },
    {
     
      image: "./images/IMG_20250320_172301.jpg",
    },
    {
     
       image: "./images/IMG_20250320_172329.jpg",
    },
    {
      
      image: "./images/IMG_20250320_172700.jpg",
    },
    {
      
      image: "./images/IMG_20250320_172400.jpg",
    },
    {
     
      image: "./images/IMG_20250320_172432.jpg",
   },
   {
     
     image: "./images/IMG_20250320_173329.jpg",
   },
   {
     
     image: "./images/IMG_20250320_172916.jpg",
   },
  ];
  
  const createTestimonialCard = (testimonial) => {
    return `
          <div class="card">
              <div class="profile">
                <img src="${testimonial.image}" alt="img" />
               
              </div>
  
            
            </div>
      `;
  };
  
  const populateColumn = (columnId) => {
    const column = document.getElementById(columnId);
  
    [...testimonials, ...testimonials].forEach((testimonial) => {
      column.innerHTML += createTestimonialCard(testimonial);
    });
  };
  
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("column1");
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("column2");
  testimonials.sort(() => Math.random() - 0.5);
  populateColumn("column3");
  