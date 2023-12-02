import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-top'>
        <div className='text-white d-grid container'>
          <div className='footer-item'>
            <a href="#" className='navbar-brand text-white text-uppercase no-wrap d-block'>
              Games<span>NETT</span>
            </a>
            <p className='para-text'>Discover new adventures and explore a curated collection of the latest and greatest games at our Game Stores. Start your exploration today and uncover an endless world of gaming possibilities!</p>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container d-flex flex-column text-center'>
          <p className='footer-bottom-text text-green'>Copyright &copy; 2023 - All rights reserved.</p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  .footer-top{
    background-color: var(--clr-violet-darker);
    padding: 78px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 18px;

    span{
      color: var(--clr-green-normal);
    }
  }
    .para-text{
      max-width: 100%;
    }
  

  .footer-item-links{
    li{
      margin: 6px 0;

      a{
        color: rgba(255, 255, 255, 0.9);

        &:hover{
          color: var(--clr-white);
          text-decoration: underline;
        }
      }
    }
  }

  .footer-item-title{
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 700;
  }

  .newsletter-form{
    margin-top: 18px;

    .input-group{
      height: 48px;
      max-width: 284px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      transition: var(--transition-default);

      :has(.input-group-field:focus){
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      &-field{
        background: #0C0A24;
        padding-left: 22px;
        padding-right: 22px;
        color: var(--clr-white);
        flex: 1;

        &::placeholder{
          color: var(--clr-white);
          opacity: 0.8;
        }
      }

      &-btn{
        color: #0C0A24;
        width: 48px;

        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }

  .footer-bottom{
    background: #04020E;
    padding: 20px 0;
    &-text{
      font-weight: 500;
    }

    li{
      margin-left: 18px;
    }

    &-links{
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 768px){
    .footer-content{
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;

      .footer-item{
        text-align: left;

        .para-text{
          margin-left: 0;
        }
      }

      .input-group{
        margin-left: 0;
      }
    }

    .footer-bottom{
      & > .container{
        flex-direction: var(--clr-white);
        justify-content: space-between;
      }

      li{
        margin-left: 32px;
      }
      &-links{
          margin-top: 0;
        }
    }
  }

  @media screen and (min-width: 992px){
    flex-direction: row;
    text-align: center;

    .footer-bottom-links{
      justify-content: center;
    }
  }

  @media screen and (min-width: 1200px){
    .footer-content{
      grid-template-columns: 3fr 2fr 2fr 3fr;
    }
  }
`;
