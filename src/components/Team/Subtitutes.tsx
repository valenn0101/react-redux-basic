import { connect } from "react-redux";

type Player = {
  id: number;
  name: string;
  photo: string;
};

type PlayersProps = {
  subtitutes: Player[];
};

const Subtitutes: React.FC<PlayersProps> = ({ substitutes }) => {
  return (
    <section>
      <h2>Subtitutes</h2>
      <div className="bench">
        {substitutes.map(player => (
          <article key={player.id} className="subtitutes">
            <div>
              <img src={player.photo} alt={player.name} />
              <button>X</button>
            </div>
            <p>{player.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    substitutes: state.substitutes,
  };
};

export default connect(mapStateToProps)(Subtitutes);
