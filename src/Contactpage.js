import styled from "styled-components";



export default function Contact(){
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
    return(
        <Wrapper>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d52898.90324721129!2d-118.32049635998551!3d34.03921625580667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c2c634253dfd01%3A0x26fe52df19a5a920!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA%2C%20USA!3m2!1d34.0487969!2d-118.2517828!5e0!3m2!1sen!2sin!4v1677266407548!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/myyawqgb"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
        </Wrapper>
    );
}