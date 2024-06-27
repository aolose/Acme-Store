interface Props {
    children?: React.ReactNode;
    childrenElement: React.JSX.Element;
    style?: React.CSSProperties;
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

interface PageProps {
    params: {
        page:number
    }
}
