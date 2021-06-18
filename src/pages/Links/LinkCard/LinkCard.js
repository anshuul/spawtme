import "./LinkCard.css";

const LinkCard = (props) => {
  console.log(props.social);
  return (
    <div className="linkcard">
      <div className="social-image">
        <img src={props.socialImage} alt="" height="30" width="30" />
      </div>
      <div className="social-name">{props.social}</div>
      <div className="social-username">{props.socialUsername}</div>
    </div>
  );
};

export default LinkCard;
