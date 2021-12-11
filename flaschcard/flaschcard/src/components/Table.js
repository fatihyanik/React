export default function Table(props) {
    /* ------------------------------- DELETE ELEMENT */
    const del = (e) => {
      const index = e.target.dataset.index;
      const cards = [...props.cards];
      cards.splice(index, 1);
      props.setCard(cards);
    };
  
    /* ------------------------------- EDIT ELEMENT */
    const edit = (e) => {
      if (!props.inputFront || !props.inputBack) return;
      const index = e.target.dataset.index;
      props.cards.splice(index, 1, { front: props.inputFront, back: props.inputBack });
      props.setCard([...props.cards]);
      props.setInputFront("");
      props.setInputBack("");
    };
  
    /* ------------------------------- SHOW TABLE OR FUNNY FACE */
    const CardFrontBack = () => {
      if (props.cards.length === 0) return <hr></hr>;
      else
        return (
          <table>
            <thead>
              <tr>
                <th>Front</th>
                <th>Back</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {props.cards.map((card, i) => (
              <tbody key={i}>
                <tr>
                  <td>{card.front}</td>
                  <td>{card.back}</td>
                  <td>
                    <button data-index={i} onClick={edit}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button data-index={i} onClick={del}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        );
    };
    /* ------------------------------- RETURN */
    return <CardFrontBack />;
  }