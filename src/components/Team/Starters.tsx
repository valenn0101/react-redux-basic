import { connect } from "react-redux";

type Player = {
  id: number;
  name: string;
  photo: string;
};

type PlayersProps = {
  starters: Player[];
};

const Starters: React.FC<PlayersProps> = ({ starters }) => {
  return (
    <section>
      <h2>Starters</h2>
      <div className="field">
        {starters.map(player => (
          <article key={player.id} className="starter">
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
    starters: state.starters,
  };
};

export default connect(mapStateToProps)(Starters);
