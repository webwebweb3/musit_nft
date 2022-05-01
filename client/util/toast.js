import { toast } from 'react-toastify';

export const withToast = promise => {
  toast.promise(
    promise,
    {
      pending: {
        render() {
          return (
            <div>
              <p>Your transaction is being processed.</p>
              <p>Hang tight... Just few more moments.</p>
            </div>
          );
        },
        icon: false,
      },
      success: {
        render({ data }) {
          return (
            <div>
              <p>Tx: {data.transactionHash.slice(0, 20)}...</p>
              <p>Has been succesfuly processed.</p>
              <a
                href={`https://ropsten.etherscan.io/tx/${data.transactionHash}`}
                target="_blank"
                rel="noreferrer"
              >
                <i>See Tx Details</i>
              </a>
            </div>
          );
        },
        // other options
        icon: '🟢',
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return <div>{data.message ?? 'Transaction has failed'}</div>;
        },
      },
    },
    {
      closeButton: true,
    },
  );
};
