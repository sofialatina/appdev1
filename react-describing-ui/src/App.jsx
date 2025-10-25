import { people } from './utils/data.jsx';
import { getImageUrl } from './utils/utils.jsx';


export default function List() {
const listItems = people.map(person => (
<li key={person.id}>
<img src={getImageUrl(person)} alt={person.name} />
<p>
<b>{person.name}:</b> {person.profession} — {person.accomplishment}
</p>
</li>
));


return (
<article>
<h1>Scientists</h1>
<ul>{listItems}</ul>
</article>
);
}