export enum CommandType {
  navigation,
  theme,
}

export type CommandGroup = {
  heading: string;
  type: CommandType;
  pathPrefix?: string;
  items: Array<CommandItem>;
};

export type CommandItem = {
  name: string;
  id: string;
};
