class SystemInfo {
  public static getEnvironment() {
    return process.env.NEXT_PUBLIC_API_URL;
  }
}

export default SystemInfo;
