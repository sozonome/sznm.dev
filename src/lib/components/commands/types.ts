export enum CommandType {
  navigation,
  theme,
}

export type CommandCollection = {
  heading: string;
  type: CommandType;
  pathPrefix?: string;
  items: Array<CommandEntry>;
};

export type CommandEntry = {
  name: string;
  id: string;
};
