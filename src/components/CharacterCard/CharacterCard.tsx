import { FC, PropsWithChildren } from "react";
import { TCharacter } from "../../types/character";

interface ICharacterCardProps {
  character: TCharacter;
}

const CharacterCard: FC<PropsWithChildren<ICharacterCardProps>> = ({
  character,
}) => {
  return (
    <div className="pointer bg-primary-3 pa-20 d-flex justify-center border-radius-6">
      <div>
        <div>
          <img
            src={character.image}
            className="border-radius-6"
            width={300}
            height={300}
            alt={character.name}
          />
        </div>

        <div className="font-20">
          {character.name} | {character.species}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
