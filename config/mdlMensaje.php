<?php
class mdlMensaje{
    public $conn;

    public function __construct(){
        $this->conn = new Connection();
        $this->conn = $this->conn->dbConnect();
    }
    public function guardarInfo($losDatos)
    {
        $sql = "INSERT INTO honducafe.info (fullname, email, telefono, mensaje) VALUES (:fullname, :email, :telefono, :mensaje)";
        
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindParam(":fullname", $losDatos->fullname);
        $stmt->bindParam(":email", $losDatos->email);
        $stmt->bindParam(":telefono", $losDatos->tel);
        $stmt->bindParam(":mensaje", $losDatos->mensaje);  
        try {
            $stmt->execute();
           
            $response = array(
                'status' => '200',
                'mensaje' => 'Insertado correctamente',
            );
            $resultado = json_encode($response);
        } catch (PDOException $e) {
            $errorInfo = $e->errorInfo;
            $resultado = json_encode(array(
                'status' => 'error',
                'mensaje' => 'Error al ejecutar el insert',
                'detalles' => $errorInfo,
            ));
    
            // Imprimir mensaje de error en el log del servidor
            error_log('Error al ejecutar el insert: ' . print_r($errorInfo, true));
        }
    
        echo $resultado;
        return $resultado;
    }
    
}?>