import LinkButton from "../LinkButton";

export default function RepositoryLink({ url }: { url: string | undefined }) {
  return (
    <>
      {url && (
        <LinkButton
          textClassName="text-white font-bold"
          className="bg-primary p-4 inline-flex justify-center text-white items-center rounded-md mb-2"
          url={url}
        >
          Open in Github
        </LinkButton>
      )}
    </>
  );
}
