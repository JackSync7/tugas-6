class testimonial {
  constructor(quote, image) {
    this._quote = quote;
    this._image = image;
  }

  get quote() {
    return this._quote;
  }
  get image() {
    return this._image;
  }

  get HTML() {
    return `<div class="card">
    <div class="upper">
        <img style="width:250px" src="${this.image}" alt="">
    </div>
    
        <div class="content">
            <p class="quotes"><i>" ${this.quote}"</i></p>
            <p class="authors"style="text-align: right">-${this.author} -</p>
        </div>
  
</div>`;
  }
}

class AuthorTestimonial extends testimonial {
  constructor(author, quote, image) {
    super(quote, image);
    this._author = author;
  }

  get author() {
    return this._author;
  }
}

class CompanyTestimonial extends testimonial {
  constructor(company, quote, image) {
    super(quote, image);
    this._company = company;
  }
  get author() {
    return this._company + " - company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "Anisa",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
);

const testimonial2 = new AuthorTestimonial(
  "Yoga",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
);

const testimonial3 = new CompanyTestimonial(
  "Josua",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].HTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
