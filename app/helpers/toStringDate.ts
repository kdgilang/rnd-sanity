interface String {
  toStringDate(): string;
}

String.prototype.toStringDate = function (this: string) {
  return new Date(this).toLocaleDateString('en-US', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}