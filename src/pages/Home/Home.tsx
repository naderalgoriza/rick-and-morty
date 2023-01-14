import { FC, PropsWithChildren } from "react";

const StyledParagraph: FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-primary-4 font-20 my-20">{children}</div>;
};

const Home: FC = () => {
  return (
    <div className="pa-20">
      <h1 className="text-center text-primary-5">Rick & Morty</h1>
      <div>
        <StyledParagraph>
          Rick and Morty is an American adult animated science-fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block Adult Swim. It is distributed
          internationally by Warner Bros. Domestic Television. The series
          follows the misadventures of cynical mad scientist Rick Sanchez and
          his good-hearted but fretful grandson Morty Smith, who split their
          time between domestic life and interdimensional adventures that take
          place across an infinite number of realities, often travelling to
          other planets and dimensions through portals and on Rick's flying
          saucer. The general concept of Rick and Morty relies on two
          conflicting scenarios: domestic family drama, and an alcoholic
          grandfather dragging his grandson into hijinks.
        </StyledParagraph>

        <StyledParagraph>
          The show revolves around the adventures of the members of the Smith
          household, which consists of parents Jerry and Beth, their children
          Summer and Morty, and Beth's father, Rick Sanchez, who lives with them
          as a guest. According to Justin Roiland, the family lives outside of
          Seattle, Washington. The adventures of Rick and Morty, however, take
          place across an infinite number of realities, with the characters
          travelling to other planets and dimensions through portals and Rick's
          flying saucer.
        </StyledParagraph>

        <StyledParagraph>
          Rick is an eccentric and alcoholic mad scientist, who eschews many
          ordinary conventions such as school, marriage, love, and family. He
          frequently goes on adventures with his 14-year-old grandson, Morty, a
          kind-hearted but easily distressed boy, whose naïve but grounded moral
          compass plays counterpoint to Rick's Machiavellian ego. Morty's
          17-year-old sister, Summer, is a more conventional teenager who
          worries about improving her status among her peers and sometimes
          follows Rick and Morty on their adventures. The kids' mother, Beth, is
          a generally level-headed person and assertive force in the household,
          though self-conscious about her professional role as a horse surgeon.
          She is dissatisfied with her marriage to Jerry, a simple-minded and
          insecure person, who disapproves of Rick's influence over his family.
        </StyledParagraph>
      </div>
    </div>
  );
};

export default Home;
