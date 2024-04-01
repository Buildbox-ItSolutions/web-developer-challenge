import Image from "next/image";
import { AvatarProps } from "./types";
import { useEffect, useMemo, useRef, useState } from "react";
import { AvatarStyled, BtnClean, Input, Wrapper } from "./styles";

const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    src = "",
    alt = "avatar",
    allowSelection,
    onSelectFile,
    ...rest
  } = props;

  const [empty, setEmpty] = useState<boolean>(!src);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEmpty(!src);

    if (!src && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [src, inputRef]);

  const disabled = useMemo(() => {
    return !empty || !allowSelection;
  }, [empty, allowSelection]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader(),
      file = event.target.files && event.target.files[0];

    if (allowSelection && file) {
      reader.onload = () => {
        onSelectFile(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  function onClean() {
    if (allowSelection && inputRef.current) {
      onSelectFile("");
    }
  }

  function onSelect() {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  }

  return (
    <Wrapper>
      <AvatarStyled
        {...rest}
        onClick={onSelect}
        className={allowSelection ? "selection" : ""}
      >
        <Image
          alt={alt}
          fill={!empty}
          onError={() => setEmpty(true)}
          width={empty ? 24 : undefined}
          height={empty ? 24 : undefined}
          src={src || "/image-empty.png"}
          style={{ objectFit: "contain" }}
        />
        {allowSelection && (
          <Input
            ref={inputRef}
            type="file"
            accept="images/*"
            onChange={onChange}
          />
        )}
      </AvatarStyled>
      <BtnClean
        name="trash"
        onClick={onClean}
        className={allowSelection ? (empty ? "hidden" : "visible") : "disabled"}
      />
    </Wrapper>
  );
};

export * from "./types";

export default Avatar;
