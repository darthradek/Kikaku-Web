class SystemInfo {
  public static getEnvironment() {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // public static readonly api_url: string = process.env.API_URL;
}

export default SystemInfo;
