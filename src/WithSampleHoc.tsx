import { render } from "@testing-library/react";

export interface DogProps {
  name: string;
  owner: string;
}
function Dog({ name, owner }: DogProps) {
  return (
    <div>
      {" "}
      Woof: {name}, Owner: {owner}
    </div>
  );
}

function withOwner(owner: string) {
  return function <T extends { owner: string }>(
    Component: React.ComponentType<T>
  ): (props: Omit<T, "owner">) => JSX.Element {
    return function (props: Omit<T, "owner">): JSX.Element {
      const newProps = { ...props, owner } as T;
      return <Component {...newProps} />;
    };
  };
}

function anu() {
  const OwnedDog = withOwner("anu")(Dog);
  return (
    <>
      <Dog owner="anu" name="nga" />
      {/* <OwnedDog name="Ford" ERROR type owner="Ferr" /> */}
      <OwnedDog name="Lamborghini" />
    </>
  );
}
