import { connect } from "react-redux";

type Player = {
  id: number;
  name: string;
  photo: string;
};

type PlayersProps = {
  substitutes: Player[];
  removePlayer: (player: Player) => void;
};

const Subtitutes: React.FC<PlayersProps> = ({ substitutes, removePlayer }) => {
  return (
    <section>
      <h2>Subtitutes</h2>
      <div className="bench">
        {substitutes.map(player => (
          <article key={player.id} className="subtitutes">
            <div>
              <img src={player.photo} alt={player.name} />
              <button onClick={() => removePlayer(player)}>X</button>
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
const mapDispatchToProps = (dispatch: any) => {
  return {
    removePlayer: (player: Player) =>
      dispatch({ type: "REMOVE_SUBTITUTE", payload: player }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subtitutes);
