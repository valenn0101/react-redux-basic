import { connect } from "react-redux";

type Player = {
  id: number;
  name: string;
  photo: string;
};

type PlayersProps = {
  players: Player[];
};

const Players: React.FC<PlayersProps> = ({ players }) => {
  return (
    <section>
      <h2>Players</h2>
      <div className="players-container">
        {players.map(player => (
          <article key={player.id} className="player">
            <img src={player.photo} alt={player.name} />
            <h3>{player.name}</h3>
            <div>
              <button>Starter</button>
              <button>Substitute</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(Players);
