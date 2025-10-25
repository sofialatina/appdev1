import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';


export default function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}
