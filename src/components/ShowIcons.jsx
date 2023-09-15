import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShowIcons = () => {
  // holds icons
  const [icons, setIcons] = React.useState([]);
  // know that the icons are loading or not
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // set isLoading state to true to show the spinner
    setIsLoading(true);
    fetch(`http://localhost:5000/icons`)
      .then((res) => res.json())
      .then((icons) => {
        console.log(icons);
        // set the icons state
        setIcons(icons);

        // set isLoading state to false
        setIsLoading(false);
      });
  }, []);

  const preetifyIconName = (iconName) => {
    // creates an array of words from the iconName
    const splittedNames = iconName.split(" ")
    // remove first 3 letters from the last word of iconName
    return splittedNames[splittedNames.length - 1].substring(3);
  }

  // if icons are loading then show a spinner
  if (isLoading)
    return (
      <div className="grow flex justify-center items-center">
        <FontAwesomeIcon
          className="animate-spin text-2xl text-blue-900"
          icon="fa-solid fa-spinner"
        />
      </div>
    );

  return (
    <div className="grow flex flex-col gap-y-7">
      <section className="flex gap-x-3">
        <h3 className="text-lg tracking-wide font-bold text-blue-950">{icons.length} Icons</h3>
      </section>
      <section className="grid grid-cols-6 gap-3">
        {icons.map((icon) => (
          <article key={icon._id}>
            <button className="w-full h-full rounded-xl px-3 pt-6 pb-4 bg-white hover:bg-yellow-300 flex flex-col justify-center items-center gap-y-6">
              <span>
                <FontAwesomeIcon className="text-4xl text-blue-950" icon={icon.name} />
              </span>
              <span className="text-xs font-light">{preetifyIconName(icon.name)}</span>
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ShowIcons;