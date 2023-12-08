import {
  ConnectWallet,
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider supportedWallets={[metamaskWallet(), walletConnect()]}>
      <ConnectWallet />
    </ThirdwebProvider>
  );
}
