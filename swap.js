contract4 = new web3.eth.Contract(
    [
      {
        inputs: [u3, u3, u1],
        name: 'exchange',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [u3, u3, u1],
        name: 'getPrice',
        outputs: [u1],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [u3, u3, u1],
        name: 'pairs',
        outputs: [u1],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    SWAP
    
    
    async function getPrice(p1, p2, p3) {
  $('#xc' + p3).html(
    (await contract4.methods
      .getPrice(
        p1,
        p2,
        ($('#amt' + p3).val() * 1e18).toLocaleString('fullwide', {
          useGrouping: false,
        })
      )
      .call()) / 1e18
  );
}
async function xc(p1, p2, p3, p4) {
  amt = ($('#amt' + p3).val() * 1e18).toLocaleString('fullwide', {
    useGrouping: false,
  });
  $('#status').html('Approving...');
  await p4.methods.approve(SWAP, amt).send(FA);
  $('#status').html('Swaping...');
  await contract4.methods.exchange(p1, p2, amt).send(FA);
  $('#status').html('Swapped');
  $('#amt' + p3).val('');
  $('#xc' + p3).html('0');
  disUSDT();
}
